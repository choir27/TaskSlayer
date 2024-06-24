import React from "react";
import { Button } from "./Button";
import { Buttons } from "../middleware/Interface";

export default function PaginatedButtons(props: Buttons) {
  const handlePageChange = (newPage: number) => {
    props.setCurrentPage(newPage);
  };

  return (
    <div className={props.className} key="buttons">
      {Math.ceil(props.arrayLength / props.rowsPerPage) < props.currentPage + 1
        ? Array.from(
            { length: Math.ceil(props.arrayLength / props.rowsPerPage) },
            (_, i) =>
              Button({
                onClick: (
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                ) => {
                  handlePageChange(i + 1);
                },
                text: `${i + 1}`,
                key: `button-${i}`,
                className: "button",
              }),
          )
        : Array.from(
            { length: Math.ceil(props.arrayLength / props.rowsPerPage) },
            (_, i) => {
              if (i < props.currentPage - 2 && i !== 0) {
                return <h1 key={`${i}-dots`}>...</h1>;
              } else if (
                (!(i > props.currentPage + 1) && i < props.currentPage + 1) ||
                i + 1 === Math.ceil(props.arrayLength / props.rowsPerPage)
              ) {
                return Button({
                  onClick: (
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                  ) => {
                    handlePageChange(i + 1);
                  },
                  text: `${i + 1}`,
                  key: `button-${i}`,
                  className: "button",
                });
              } else {
                return <h1 key={`${i}-dots`}>...</h1>;
              }
            },
          )}
    </div>
  );
}
