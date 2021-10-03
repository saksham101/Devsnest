import React from "react";

function PaginationBoxes() {
  return (
    <div className="pagination">
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div>
          <a
            href="#"
            className="no-underline w-20 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            Prev
          </a>
        </div>
        <div className="flex-1 flex flex-wrap item-center justify-center">
          <a
            href="#"
            className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            1
          </a>
          <a
            href="#"
            className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-600 rounded-sm transition-colors duration-200 ease font-medium"
          >
            2
          </a>
          <a
            href="#"
            className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            3
          </a>
          <a
            href="#"
            className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            4
          </a>
          <a
            href="#"
            className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            5
          </a>
        </div>
        <div>
          <a
            href="#"
            className="no-underline w-20 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaginationBoxes;
