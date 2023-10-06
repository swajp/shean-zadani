import Code from "@/components/code";
import Form from "@/components/form";
import Info from "@/components/info";
import RightImages from "@/components/rightImages";
import Rights from "@/components/rights";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-2 md:p-8 max-w-screen-xl mx-auto h-screen flex items-center ">
      <div className="border-4 rounded-xl md:rounded-[2.3rem] border-[#F7F7F7] ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center flex-col p-4 md:p-16 content-center ">
            <div className="">
              <Image src="/title.png" alt="" width={500} height={200} />
              {/*<Image src="/title.png" alt="" width={250} height={200} />*/}
            </div>
            <div className="flex flex-col gap-2">
              <Info />

              <div className="flex flex-col gap-3 ">
                <Code />
                <Form />
              </div>

              <Rights />
            </div>
          </div>
          <RightImages />
        </div>
      </div>
    </main>
  );
}
