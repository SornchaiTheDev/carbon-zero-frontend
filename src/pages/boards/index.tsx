import { Icon } from "@iconify/react";
import Board from "~/components/Board";
import Layout from "~/layout";

function BoardPage() {
  return (
    <Layout>
      <div
        className="w-full h-[50vh] px-6"
        style={{
          background: "url(assets/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="my-6 text-4xl font-bold text-green-12">Boards</h2>
          <button className="flex items-center gap-2 p-2 px-4 rounded-lg bg-sand-3 text-sand-12 hover:text-sand-10">
            <Icon icon="solar:add-circle-line-duotone" />
            New board
          </button>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-10">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </Layout>
  );
}

export default BoardPage;
