import React, { useState } from "react";
import { Tabs, Table, Button, Modal } from "antd";
import { ExpandOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const SheetTabs = ({ datoCmsWork }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Tabs defaultActiveKey="1" type="card" className="sheet__tabs">
      <TabPane tab="Intro" key="1">
        <div
          dangerouslySetInnerHTML={{
            __html: datoCmsWork.introNode.childMarkdownRemark.html,
          }}
        />
      </TabPane>
      <TabPane tab="Data" key="3">
        {datoCmsWork.dataset[0] && (
          <>
            <Button 
              className='tabs_expand_btn'
              onClick={handleModalVisible}
            >
              <ExpandOutlined />
            </Button>
            <Table
              columns={datoCmsWork.dataset[0].column}
              dataSource={datoCmsWork.dataset[0].data}
              pagination={{
                hideOnSinglePage: true
              }}
              scroll={{ x: 1300 }}
            />
            <Modal
              visible={modalVisible}
              footer={null}
              onCancel={handleModalVisible}
              width='90%'
            >
              <Table
                columns={datoCmsWork.dataset[0].column}
                dataSource={datoCmsWork.dataset[0].data}
                pagination={{
                  hideOnSinglePage: true,
                  pageSize: 25
                }}
                scroll={{ x: 1300 }}
              />
            </Modal>
          </>
        )}
      </TabPane>
      <TabPane tab="Content" key="2">
        <div
          dangerouslySetInnerHTML={{
            __html: datoCmsWork.contentNode.childMarkdownRemark.html,
          }}
        />
      </TabPane>
    </Tabs>
  );
};

export default SheetTabs;
