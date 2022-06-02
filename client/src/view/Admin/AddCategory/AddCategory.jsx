import React from 'react'
import { useState } from 'react'
import {Input} from 'antd'
import { Modal } from 'antd'
import { useMutation } from '@apollo/client';
import adminQuery from "../AdminQuery";
export default function AdminCategory() {
  const [mutateFunction, { data, loading, error }] = useMutation(adminQuery.mAddCategory,
    {onCompleted : (data) => alert("Thêm thành công")}
  );
    const [newGenre, setNewGenre] = useState({
      name: "",
    });
    const { name } = newGenre;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onInputChange = event => {
		setNewGenre({
			...newGenre,
			[event.target.name]: event.target.value
		})
	}

    const showModal = () => {
      setIsModalVisible(true);
    };
    
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
      setIsModalVisible(false);
      setNewGenre({name: ""})
    };
    
    const handleCancel = () => {
      setIsModalVisible(false);
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
                placeholder="Tên thể loại"
                onChange={onInputChange}
                name = 'name'
                size="large"
              ></Input>
              <div className="flex justify-center">
                <button
                  onClick={showModal}
                  className="btn-admin w-fit"
                  type="submit"
                >
                  Thêm thể loại
                </button>
                <Modal
                  title="Xác nhận"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  bodyStyle={{
                    backgroundColor: "#191919",
                    color: "#fff",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <p>Xác nhận thêm thể loại ?</p>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}