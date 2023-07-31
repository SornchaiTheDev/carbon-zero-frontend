import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { User } from "~/Types/User";
import Back from "~/components/Back";
import Board from "~/components/Board";
import Button from "~/components/Button";
import Modal from "~/components/Modal";
import Layout from "~/layout";
import { api } from "~/utils";
import type { Board as BoardType } from "~/Types/Board";

function BoardPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [boardBody, setBoardBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const handleOnAddNewBoard = async () => {
    setIsLoading(true);
    if (boardName === "" || boardBody === "") {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      await api.post("/boards", {
        title: boardName,
        body: boardBody,
        owner_id: user?.id,
      });

      setIsOpen(false);
      setBoardName("");
      setBoardBody("");
      setIsLoading(false);
      fetchNews();
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    setIsError(false);
  }, [isOpen]);

  const isTitleError = isError && boardName === "";
  const isBodyError = isError && boardBody === "";

  const [boards, setBoards] = useState<BoardType[]>([]);
  const fetchNews = async () => {
    const _news = await api.get("/boards");
    setBoards(_news.data as BoardType[]);
  };
  useEffect(() => {
    fetchNews();
  }, []);

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
              Title
            </label>
            <input
              id="boardName"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
            />
            {isTitleError && (
              <p className="text-red-9">Title cannot be empty</p>
            )}
          </div>
          <div>
            <label htmlFor="BoardBody" className="text-sand-12">
              Body
            </label>
            <textarea
              id="BoardBody"
              value={boardBody}
              onChange={(e) => setBoardBody(e.target.value)}
              rows={5}
              className="w-full p-2 mt-1 text-lg border rounded-lg boder-sand-11"
            />
            {isBodyError && <p className="text-red-9">Body cannot be empty</p>}
          </div>
          <Button onClick={handleOnAddNewBoard} {...{ isLoading }}>
            Add new Board
          </Button>
        </div>
      </Modal>
      <Layout>
        <div
          className="w-full h-[25vh] px-6"
          style={{
            background: "url(assets/bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container px-4 mx-auto">
          <Back href="/" className="mt-4" />
          <div className="flex items-center justify-between">
            <h2 className="my-6 text-4xl font-bold text-green-12">Boards</h2>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 p-2 px-4 rounded-lg bg-sand-3 text-sand-12 hover:text-sand-10"
            >
              <Icon icon="solar:add-circle-line-duotone" />
              New board
            </button>
          </div>
          {boards.length > 0 ? (
            <div className="grid grid-cols-12 gap-6 mt-10">
              {boards.map(({ id, title, owner_id, body }) => (
                <Board key={title} {...{ id, title, owner_id, body }} />
              ))}
            </div>
          ) : (
            <h4>Boards are empty.</h4>
          )}
        </div>
      </Layout>
    </>
  );
}

export default BoardPage;
