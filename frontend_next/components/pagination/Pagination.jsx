import React from "react";

const Pagination = ({ currentPage, totalPages, handlePaginationClick }) => {
  return (
    <div className="flex justify-center mt-9 gap-3 ">
      <button
        className="cursor-pointer font-normal text-base text-gray-900"
        onClick={() => handlePaginationClick("prev")}
        disabled={currentPage <= 1}
      >
        Prev
      </button>

      <span className="flex bg-[#66E2a7] px-4 py-2 rounded-lg font-normal text-base text-gray-800">
        {currentPage} of {totalPages}
      </span>

      <button
        className="cursor-pointer font-normal text-base text-gray-900 "
        onClick={() => handlePaginationClick("next")}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

// import React from "react";
// export default function Pagination({
//   postsPerPage,
//   totalPosts,
//   paginateFront,
//   paginateBack,
//   currentPage,
// }) {
//   return (
//     <div className='py-2'>

//       <nav className='flex'></nav>
//       <div>
//         <nav
//           className=' flex gap-3'
//           aria-label='Pagination'
//         >
//           <a
//             onClick={() => {
//               paginateBack();
//             }}
//             href='#'
//             className=''
//           >
//             <span>Prev</span>
//           </a>
//           <div>
//         <p className='text-base text-gray-900 rounded-lg px-4 py-3 bg-[#66E2A7]'>

//           <span className='font-normal '>{currentPage * postsPerPage - 12}</span>
//           of
//           <span className='font-normal'> {currentPage * postsPerPage} </span>

//           <span className='font-normal'> {totalPosts} </span>

//         </p>
//       </div>
//           <a
//             onClick={() => {
//               paginateFront();
//             }}
//             href='#'
//             className=''
//           >
//             <span>Next</span>
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// }
