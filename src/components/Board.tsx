import Link from "next/link";
import { useState, useEffect } from "react";
import { api } from "~/utils";
interface Props {
  id: number;
  title: string;
  owner_id: number;
  body: string;
}
function Board({ id, title, owner_id, body }: Props) {
  const [owner, setOwner] = useState<string | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await api.get(`users/${owner_id}`);
      setOwner(user.data.name + " " + user.data.lastname);
    };
    fetchUser();
  }, [owner_id]);
  return (
    <Link
      href={`/boards/${id}`}
      className="flex flex-col col-span-12 gap-2 p-4 bg-white rounded-lg shadow sm:col-span-6 lg:col-span-4"
    >
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center gap-1 text-sm">
          <h4>{owner === null ? "Loading..." : owner}</h4>
        </div>
      </div>
      <p>{body.length > 100 ? body.slice(0, 100) + "..." : body}</p>
    </Link>
  );
}

export default Board;
