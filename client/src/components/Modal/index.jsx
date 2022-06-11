import { Modal } from 'antd';
export const ModalConfirmDelete = (id,action,content) => {
    Modal.confirm({
      title: 'Xác nhận',
      content: content,
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      onOk : ()=>{action(id)},
      bodyStyle: {
          backgroundColor: "#191919"
      }
    });
  };
export const ModalConfirmAdd = (action,content) =>{
  Modal.confirm({
    title: 'Xác nhận',
    content: content,
    okText: 'Xác nhận',
    cancelText: 'Hủy',
    onOk : ()=>{action()},
    bodyStyle: {
        backgroundColor: "#191919"
    }
  });
}