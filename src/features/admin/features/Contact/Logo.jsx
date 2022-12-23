import { message, Modal, Upload } from "antd";
import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { fileToBase64 } from "../../utils/utils";
import useAuth from "../../hooks/useAuth";

const { Dragger } = Upload;

const Logo = () => {
  const { fileList, setFileList } = useAuth();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState();

  const props = {
    name: "logo",
    fileList: fileList.slice(-1),
    multiple: false,
    maxCount: 1,
    beforeUpload: (file) => {
      if (file.type !== "image/png") {
        message.error("L'image doit être de type .png");
      } else {
        message.success("L'image a bien été chargée.");
        setFileList([file]);
      }
      return false;
    },
    onRemove: () => {
      setFileList([]);
    },
    onPreview: async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await fileToBase64(file.originFileObj);
      }

      setPreviewImage(file.url || file.preview);
      setPreviewVisible(true);
    },
  };
  return (
    <>
      <Dragger {...props} defaultFileList={fileList}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-hint">
          Veuillez déposer ici votre logo au format PNG ou JPG
        </p>
      </Dragger>
      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img
          className="modal-img"
          alt="example"
          style={{ width: "100%" }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default Logo;
