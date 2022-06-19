import { Modal } from "antd";
import { createRef, useState } from "react";
import Draggable from "react-draggable";
import CustomForm from "./Form";
import "../styles/Form.css";

const CustomModal = ({
  openModal,
  setOpenModal,
  title,
  purpose,
  fields,
  topic,
  extraFields,
}) => {
  const [options, setOptions] = useState({
    disabled: true,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 },
  });

  const draggleRef = createRef();

  const handleCancel = () => {
    setOpenModal(!openModal);
  };

  const onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setOptions({
      bounds: {
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      },
    });
  };
  const { bounds, disabled } = options;
  return (
    <>
      <Modal
        className={topic === "contact" ? "contact-modal" : ""}
        title={
          <div
            style={{
              width: "100%",
              cursor: "move",
              color: "black",
            }}
            onMouseOver={() => {
              if (disabled) {
                setOptions({
                  disabled: false,
                });
              }
            }}
            onMouseOut={() => {
              setOptions({
                disabled: true,
              });
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            {title}
          </div>
        }
        visible={openModal}
        onCancel={handleCancel}
        footer={null}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <CustomForm
          purpose={purpose}
          okText={purpose.purpose === "edit" ? "Modifier" : "Valider"}
          openModal={openModal}
          setOpenModal={setOpenModal}
          fields={fields}
          topic={topic}
          extraFields={extraFields}
        />
      </Modal>
    </>
  );
};

export default CustomModal;
