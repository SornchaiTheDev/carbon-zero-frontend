import { Icon } from "@iconify/react";
import Layout from "~/layout";
import Image from "next/image";
import Link from "next/link";

function InsideNewsPage() {
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
      <div className="container px-4 mx-auto -translate-y-48">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <Link
            href="/news"
            className="flex items-center gap-2 text-sand-12 hover:text-sand-12/70 w-fit top-6 left-6"
          >
            <Icon icon="solar:arrow-left-line-duotone" />
            <h4>Back</h4>
          </Link>

          <div className="mt-6 bg-white rounded-t-3xl">
            <h4>19 JUNE 2023 • 08:30 AM</h4>
            <h4 className="w-2/3 mt-2 text-2xl font-bold leading-normal capitalize text-blue-12">
              ปลูกป่าเพื่อโลก
            </h4>
            <div className="flex items-center gap-2 mt-4">
              <div className="p-2 text-2xl rounded bg-blue-4 text-blue-10 w-fit">
                <Icon icon="carbon:location-filled" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-sand-12">Location</h4>
                <h4 className="text-sand-12">สวนป่าเบญจกิติศิริ</h4>
              </div>
            </div>
            <h4 className="mt-10 font-bold text-sand-12">Description</h4>
            <p className="mt-2">
              โครงการปลูกป่า (ต้นไม้ยืนต้น)
              เพื่อเพิ่มพื้นที่สีเขียวลดภาวะโลกร้อน Forestgrowing project
              (Perennial) in order to increase green zone,reduce global
              warmingand restore the forestaround nearby community.
              และการปลูกป่าในเขตชุมชนใกล้เคียง หลักการและเหตุผล
              ป่าไม้เป็นทรัพยากรที่มีความสำคัญยิ่งของประเทศทั้งทางด้าน เศรฐกิจ
              สังคม และสิ่งแวดล้อม แต่ผลจากการพัฒนาเศษฐกิจ อุตสากหรรรม
              และเทคโนโลยีของประเทศไทยที่ผ่านมาทำให้มีความต้องการใช้ที่ดินเพื่อการเกษตรของประชาชนเพิ่มขึ้นอย่างรวดเร็วจึงได้มีการบุกรุกทำลายป่าอย่างรุนแรงทำให้พื้นที่ป่าไม้ลดลงเป็นจำนวนมากส่งผลเสียหายต่อประเทศเป็นอย่างมากในหลาย
              ๆ
              ด้านทั้งในเรื่องการขาดแคลนไม้ใช้สอยภายในประเทศและผลกระทบต่อสิ่งแวดล้อมทำให้เกิดภาวะโลกร้อนและภัยพิบัติต่าง
              ๆซึ่งเป็นปัญหาที่นานาประเทศตระหนัก
              และมีการรณรงค์อย่างกว้างขวางดังนั้น
              จึงจำเป็นต้องฟื้นฟูความอุดมสมบูรณ์ของทรัพยากรป่าไม้ให้กลับคืนมาดังเดิม
              ดังนั้นบริษัท สลาแมนเดอร์ จิวเวอรี่จำกัด
              เป็นส่วนหนึ่งในการได้เข้าร่วมโครงการปลูกป่ากับกรมป่าไม้
              และประชาชนในพื้นที่ใกล้เคียงเพื่อร่วมมือในการแก้ไขปัญหาดังกล่าวจึงได้ทำโครงการปลูกป่าเพื่อสังคม
              และสิ่งแวดล้อมซึ่งโครงการนี้จะเป็นการสนับสนุนทางบริษัทฯ
              เข้าร่วมโครงการปลูกป่าได้ตระหนักถึงความสำคัญของอนุรักษ์ทรัพยากรป่าไม้
              และได้เข้ามามีส่วนร่วมกับกรมป่าไม้
              และประชาชนดำเนินการปลูกป่าบริเวณพื้นที่ป่าสงวนแห่งชาติที่เคยถูกบุกรุกทำลายมาก่อนเพื่อช่วยกันดูแลรักษาป่าไม้ให้คงความอุดมสมบูรณ์และยั่งยืนต่อไปในอนาคต
            </p>
            <h4 className="mt-10 font-bold text-sand-12">Join</h4>
            <a href="https://google.co.th" target="_blank" className="block mt-2 text-blue-11">
              https://google.co.th
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InsideNewsPage;
