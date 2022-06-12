import React,{ useState } from 'react'
import {Input} from 'antd'
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import adminQuery from "../AdminQuery";
import { ModalConfirmAdd } from '../../../components/Modal';
import { openNotificationWithIcon } from '../../../components/Notification';
export default function AdminCategory() {
  const navigate = useNavigate();
  const [mutateFunction] = useMutation(adminQuery.mAddCategory,
    {onError : () => {
        localStorage.removeItem("token")
        navigate("/login-admin")
        openNotificationWithIcon("error", "Từ chối truy cập","bottomRight");
    },
    onCompleted : () =>{
      openNotificationWithIcon("success","Thêm thành công","bottomRight")
    }
    });
    const [newGenre, setNewGenre] = useState({
      name: "",
    });
    const { name } = newGenre;
    const onInputChange = event => {
		setNewGenre({
			...newGenre,
			[event.target.name]: event.target.value
		})
	}
    
    const handleOk = () => {
      mutateFunction({
        variables: {
          input: {
            name: name,
          },
        },
        context: {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        },
      });
      setNewGenre({name: ""})
    };
    return (
      <>
        <div
          style={{ backgroundColor: "#141414" }}
          className="min-h-screen flex justify-center"
        >
          <div
            style={{ backgroundColor: "#191919" }}
            className="w-full h-fit m-8 rounded-xl"
          >
            <div className="header-content-admin">Thêm thể loại</div>
            <div className="mx-8 mb-8">
              <Input
                placeholder="Vui lòng nhập tên thể loại"
                onChange={onInputChange}
                name = 'name'
                value={name}
                size="large"
              ></Input>
              <div className="flex justify-center">
                <button
                  onClick={()=>ModalConfirmAdd(handleOk,"Xác nhận thêm thể loại")}
                  className="btn-admin w-fit"
                  type="submit"
                >
                  Thêm thể loại
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}