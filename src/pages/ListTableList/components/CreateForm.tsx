import React from 'react';
import { Modal } from 'antd';

interface CreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title="新建规则"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      {console.error(props)}
      {props.children}
    </Modal>
  );
};

export default CreateForm;
