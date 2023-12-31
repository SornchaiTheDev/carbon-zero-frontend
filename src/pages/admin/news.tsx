import { Icon } from "@iconify/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { TUser } from "~/Types/Users";
import Back from "~/components/Back";
import Button from "~/components/Button";
import Modal from "~/components/Modal";
import Layout from "~/layout";
import { api } from "~/utils";
import { TNews } from "~/Types/News";
import News from "~/components/News";
import { useRouter } from "next/router";
import { AxiosError } from "axios";

function AddNews() {
  const [isOpen, setIsOpen] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [newsTitle, setNewsTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [joinDetail, setJoinDetail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [coverImageError, setCoverImageError] = useState(
    "Image cannot be empty"
  );
  const [user, setUser] = useLocalStorage<TUser | null>("user", null);
  const router = useRouter();

  useEffect(() => {
    if (user?.user_type_id !== 0) {
      router.replace("/");
    }
  }, [user, router]);

  const handleOnAddNewBoard = async () => {
    setIsLoading(true);
    if (
      newsTitle === "" ||
      description === "" ||
      location === "" ||
      coverImage === null
    ) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      if (!coverImage.type.toString().match("image/jpeg")) {
        throw new Error("ERR_BAD_REQUEST");
      }
      const res = await api.post("news", {
        title: newsTitle,
        location,
        description,
        join_detail: joinDetail,
        owner_id: user?.id,
      });

      const formData = new FormData();

      formData.append("file", coverImage);

      await api.post("uploadNewImage", formData, {
        params: {
          news_id: res.data.id,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setIsOpen(false);
      setNewsTitle("");
      setDescription("");
      setJoinDetail("");
      setLocation("");
      setIsLoading(false);
      fetchNews();
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.code === "ERR_BAD_REQUEST") {
          setCoverImageError("Invalid file type, only jpeg accept");
        }
      }

      if (err instanceof Error) {
        if (err.message === "ERR_BAD_REQUEST") {
          setCoverImageError("Invalid file type, only jpeg accept");
        }
      }

      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsError(false);
  }, [isOpen]);

  const isTitleError = isError && newsTitle === "";
  const isLocationError = isError && location === "";
  const isBodyError = isError && description === "";
  const isJoinDetailError = isError && joinDetail === "";
  const isCoverImageError =
    (isError && coverImage === null) ||
    coverImageError !== "Image cannot be empty";

  const [news, setNews] = useState<TNews[]>([]);
  const fetchNews = async () => {
    const _news = await api.get("/news");
    setNews(_news.data as TNews[]);
  };
  useEffect(() => {
    fetchNews();
  }, []);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setCoverImage(e.target.files[0]);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create new board"
        className="max-w-[40rem] "
      >
        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor="boardName" className="text-sand-12">
              Cover Image
            </label>
            <input
              id="boardName"
              type="file"
              onChange={handleFileSelect}
              className="w-full p-2 mt-1 mb-2 text-lg border rounded-lg boder-sand-11"
            />
            {isCoverImageError && (
              <p className="text-red-9">{coverImageError}</p>
            )}
            <label htmlFor="boardName" className="text-sand-12">
              Title
            </label>
            <input
              id="boardName"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
            />
            {isTitleError && (
              <p className="text-red-9">Title cannot be empty</p>
            )}
          </div>
          <div>
            <label htmlFor="boardName" className="text-sand-12">
              Location
            </label>
            <input
              id="boardName"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
            />
            {isLocationError && (
              <p className="text-red-9">Location cannot be empty</p>
            )}
          </div>
          <div>
            <label htmlFor="joinDetail" className="text-sand-12">
              Join Detail
            </label>
            <input
              id="joinDetail"
              value={joinDetail}
              onChange={(e) => setJoinDetail(e.target.value)}
              className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
            />
            {isJoinDetailError && (
              <p className="text-red-9">Join Detail cannot be empty</p>
            )}
          </div>
          <div>
            <label htmlFor="Description" className="text-sand-12">
              Description
            </label>
            <textarea
              id="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
            />
            {isBodyError && (
              <p className="text-red-9">Description cannot be empty</p>
            )}
          </div>
          <Button onClick={handleOnAddNewBoard} {...{ isLoading }}>
            Add News
          </Button>
        </div>
      </Modal>
      <Layout className="flex flex-col h-screen">
        <div
          className="w-full h-[25vh] px-6"
          style={{
            background: "url(assets/bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container flex-1 px-4 mx-auto mt-36">
          <Back href="/admin" className="mt-4" />
          <div className="flex items-center justify-between">
            <h2 className="my-6 text-4xl font-bold text-green-12">News</h2>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 p-2 px-4 rounded-lg bg-sand-3 text-sand-12 hover:text-sand-10"
            >
              <Icon icon="solar:add-circle-line-duotone" />
              Add News
            </button>
          </div>
          {news.length > 0 ? (
            <div className="grid grid-cols-12 gap-6 mt-10">
              {news.map(({ title, id, description, images }, i) => (
                <News
                  key={i}
                  id={id}
                  title={title}
                  description={description}
                  coverImg={
                    images.length > 0
                      ? "https://cbz-backend.peerawitp.me/imgs/" +
                        images[0].image
                      : undefined
                  }
                  href={`/news/${id}`}
                />
              ))}
            </div>
          ) : (
            <h4>News are empty.</h4>
          )}
        </div>
      </Layout>
    </>
  );
}

export default AddNews;
