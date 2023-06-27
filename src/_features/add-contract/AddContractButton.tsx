import { useCallback, useState } from "react";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { contractModel } from "@entities/contract";
import { ContractForm } from "./ContractForm";

export const AddContractButton = () => {
  const [formVisible, setFormVisible] = useState(false);
  const { add } = contractModel.useContracts();

  const showModal = () => setFormVisible(true);
  const hideModal = () => setFormVisible(false);

  const onSubmit = useCallback(
    (values: any) => {
      hideModal();

      console.log(values);
      // add({
      //   name: values.name,
      //   abi: values.abi,
      //   address: values.address,
      //   chain: values.chain,
      // });
    },
    [add]
  );

  return (
    <>
      <Button icon={<PlusOutlined />} onClick={showModal}>
        Add contract
      </Button>

      <Modal
        title="Add new contract"
        open={formVisible}
        footer={null}
        onCancel={hideModal}
        destroyOnClose
      >
        <ContractForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
};
