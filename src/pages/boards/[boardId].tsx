import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Discuss from "~/components/Discuss";
import Layout from "~/layout";
import Image from "next/image";
import { api } from "~/utils";
import { Board } from "~/Types/Board";
import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";
import { TUser } from "~/Types/Users";

type Discussion = {
  id: number;
  body: string;
  owner_id: number;
  board_id: number;
  details: string[];
  created_at: string;
};

function InsideBoard() {
  const [board, setBoard] = useState<Board | null>(null);
  const [owner, setOwner] = useState<string | null>(null);
  const [user, setUser] = useLocalStorage<TUser | null>("user", null);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { boardId } = router.query;

  const handleOnComment = async () => {
    if (comment === "") return;
    try {
      await api.post(`boards/${boardId}/discussion`, {
        body: comment,
        owner_id: user?.id,
      });
      const res = await api.get(`boards/${boardId}/discussions`);
      setDiscussions(res.data);
    } catch (err) {}

    setComment("");
  };
  const fetchAuthor = async (userId: number) => {
    const res = await api.get(`users/${userId}`);
    setOwner(res.data.name + " " + res.data.lastname);
  };

  useEffect(() => {
    const fetchBoard = async () => {
      const res = await api.get(`boards/${boardId}`);
      fetchAuthor(res.data.owner_id);
      setBoard(res.data);
    };
    fetchBoard();
  }, [boardId]);

  useEffect(() => {
    const fetchDisscussions = async () => {
      const res = await api.get(`boards/${boardId}/discussions`);
      setDiscussions(res.data);
    };
    fetchDisscussions();
  }, [boardId]);
  return (
    <Layout>
      <div
        className="w-full h-[50vh] px-6"
        style={{
          background: "url(../assets/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container px-4 mx-auto mt-10">
        <Link
          href="/boards"
          className="flex items-center gap-2 my-4 text-sand-12 hover:text-sand-12/70 w-fit top-6 left-6"
        >
          <Icon icon="solar:arrow-left-line-duotone" />
          <h4>Back</h4>
        </Link>
        <h2 className="text-3xl font-bold">{board?.title}</h2>
        <div className="flex items-end gap-4 mt-4">
          <div className="relative w-10 h-10 rounded-full shadow bg-sand-5">
            <Image
              src="https://robohash.org/test.png"
              alt="profile Image"
              layout="fill"
            />
          </div>
          <div>
            <h4 className="mt-2 text-sm">Created by</h4>
            <h4 className="text-sm font-medium">{owner}</h4>
          </div>
        </div>

        <h2 className="mt-4 text-lg">{board?.body}</h2>

        <hr className="my-4" />
        <div className="flex w-full gap-2 mt-10">
          <div className="relative w-10 h-10 rounded-full shadow bg-sand-5">
            <Image
              src="https://robohash.org/test.png"
              alt="profile Image"
              layout="fill"
            />
          </div>
          <div className="flex-1">
            {!!user && (
              <h4 className="font-medium">{user?.name + user?.lastname}</h4>
            )}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="block w-full p-2 text-lg border-b-2 outline-none border-green-9"
            />
            <button
              onClick={handleOnComment}
              className="px-4 py-2 mt-4 border-2 rounded-full hover:bg-green-3 border-green-10 text-green-10"
            >
              Comment
            </button>
          </div>
        </div>
        <h3 className="mt-10 text-2xl font-medium">
          Discussions ({discussions.length})
        </h3>
        {discussions.length === 0 ? (
          <h4 className="text-lg">No discussion yet</h4>
        ) : (
          <div className="flex flex-col gap-4">
            {discussions.map(
              ({ board_id, body, created_at, details, id, owner_id }) => (
                <Discuss
                  key={id}
                  {...{ owner_id, created_at, body, details, id, board_id }}
                />
              )
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default InsideBoard;
