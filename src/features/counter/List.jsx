import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { del } from "./TodoSlice";
import {toastmsg} from './ToastSlice';
import { toggleCheck } from "./CompletedSlice";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom";
import styles from "./todo.module.css";

const List = ({ IsOpen, setIsOpen, editInput,setLoading }) => {
  const value = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);

  const openModal = (index) => {
    setLoading(true);
    dispatch(del(index));
    dispatch(toastmsg('deleted succesfully'))
    setTimeout(() => {
      setLoading(false);
      
    }, 4000);
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const handleChk = (e) => {
      dispatch(toggleCheck(e.target.checked))
      // document.querySelectorAll("input[type=checkbox]:checked").length
      // if (checked){
      //   dispatch(toggleCheck())
      // }
  };

  const editSetInput = (index) => {
    editInput(index);
  };

  return (
    <div
      style={{
        backgroundColor: "cornflowerblue",
        fontWeight: "bold",
        fontSize: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "44px 44px",
        borderRadius: "15px",
        width: "500px",
        height: "auto",
        overflow: "hidden",
        // margin:'20px'
      }}
    >
      <span style={{ fontFamily: "sans-serif", fontSize: "1.5rem" }}></span>
      {value.length > 0 &&
        value.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                color: "white",
                margin: "10px",
                borderRadius: "5px",
                border: "1px solid darkBlue",
                padding: "28px",
                display: "flex",
                // flexDirection: "column",
              }}
            >
              <div >
                <input
                  type="checkbox"
                  value={index}
                  onChange={(e) => handleChk(e)}
                  className={styles.checkbox}
                />
              </div>

              <div>
                <li style={{ listStyle: "none", height: "50px" }}>
                  {item.length > 10 ? (
                    <div>
                      {item.slice(0, 9)}
                      <Link to={`/about/${index}`}>
                        <span style={{ fontSize: "15px" }}>
                          {" "}
                          &nbsp;&nbsp;View more...
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <div>{item}</div>
                  )}

                  <div>
                    <AiOutlineEdit
                      style={{ color: "green", cursor: "pointer" }}
                      onClick={() => editSetInput(index)}
                    />
                    <MdDelete
                      onClick={() => {
                        openModal(index);
                      }}
                      style={{ marginLeft: "25px", color: "red" }}
                    ></MdDelete>
                    <span
                      style={{
                        fontSize: "15px",
                        margin: "20px",
                        color: "grey",
                      }}
                    >
                      {date}
                    </span>
                  </div>
                </li>
              </div>
            </div>
          );
        })}

      <ModalComponent IsOpen={IsOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default List;
