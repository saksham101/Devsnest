import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoading } from "../actions/action";
const Loading = () => {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(changeLoading(false));
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Loading</h1>
    </div>
  );
};

export default Loading;
