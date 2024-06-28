import React, { memo } from "react";
import "./admin.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../context/slices/authSlice";
import { useGetUsersQuery } from "../../context/api/userApi";

const Admin = () => {
  let dispatch = useDispatch();
  let { data } = useGetUsersQuery();
  console.log(data);

  return (
    <div className="admin container">
      <h1>Admin panel</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit
        quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores
        suscipit. Dignissimos, ut repudiandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit
        quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores
        suscipit. Dignissimos, ut repudiandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit
        quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores
        suscipit. Dignissimos, ut repudiandae!
      </p>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
};

export default memo(Admin);
