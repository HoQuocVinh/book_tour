import { memo } from "react";
import { useEffect, useState } from "react";
import WrapperContent from "~/components/common/WrapperContent";

// const ContentBookingTour = ({ tourDetailDes }) => {
//   const location = "Hồ Chí Minh";
//   return (
//     <WrapperFlex>

//     </WrapperFlex>
//   //   <WrapperContent className="mt-2 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
//   //   <div dangerouslySetInnerHTML={{ __html: tourDetailDes }} />
//   // </WrapperContent>
//       {/* <div className="relative">
//         <div className="h-[390px] w-full">
//           <img
//             src="https://images.unsplash.com/photo-1623596711744-c10ed15581d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80"
//             className="h-full w-full object-cover"
//             alt="img-tour-content"
//           />
//         </div>
//         <div className="absolute top-10 left-0 -translate-x-[10px] bg-[#E52822]">
//           <h2 className="ribbon">Di du lich dau do </h2>
//         </div>
//         <div className="flex items-center gap-2 bg-gray-200 p-4 text-c3">
//           <span>
//             <IconLocationRegular />
//           </span>
//           <span className="font-bold">{location}</span>
//         </div>
//       </div> */}

//       {/* <WrapperContent className="mt-2 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
//         <div dangerouslySetInnerHTML={{ __html: detail }} />
//       </WrapperContent> */}
//   )
// };

const ContentBookingTour = ({ tourDetailDes }) => {
  useEffect(() => {
    const element = document.getElementById("tourContent");
    const nodesH = [...element.getElementsByTagName("h3")];
    const nodesP = [...element.getElementsByTagName("p")];
    const nodesDiv = [...element.getElementsByTagName("div")];

    nodesDiv.map((item) => item.classList.add("px-4"));
    nodesP.map((item) =>
      item.classList.add(
        "text-justify",
        "mb-3",
        `${item.innerText.charAt(0) === "*" && "text-red-500"}`
      )
    );
    nodesH.map((item) =>
      item.classList.add(
        "font-semibold",
        "text-dark-blue",
        "text-2xl",
        "py-3",
        "mb-3",
        "mt-4"
      )
    );
    // nodesP.map(item => item.classList.add(""))
    // nodes.map((item) => item.classList.add("font-bold text-dark-blue"));
    // const element = document.getElementById("tourContent");
    // const node = element.getElementsByTagName("h3");
    // console.log("TCL: ContentBookingTour -> node", node)
    // const tag = [...node];
    // console.log("TCL: ContentBookingTour -> tag", tag);
    // tag.map((item) => setGetTagName((prev) => [...prev, item.textContent]));
  }, []);

  return (
    <WrapperContent className="mt-5 px-8 pt-1 pb-4 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
      <div
        id="tourContent"
        dangerouslySetInnerHTML={{ __html: tourDetailDes }}
      />
    </WrapperContent>
  );
};
export default memo(ContentBookingTour);
