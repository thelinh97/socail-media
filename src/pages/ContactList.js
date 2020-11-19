import React, { Fragment } from "react";
import { Button, Layout, Table, Menu, Space, Modal } from "antd";
import "./ContactList.css";
import {
  PlusSquareFilled,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import AddContact from "../components/AddContact";
import { useRootContext } from "../contextApi/rootContext";
import { sortName } from "../helper/sortName";

const ContactList = () => {
  const { Header, Content, Footer } = Layout;
  const {
    values,
    handleAddFormOnFinishFailed,
    handleAddFormOnFinish,
    adding,
    handleOnDelete,
    editing,
    showEditModal,
    showAddModal,
  } = useRootContext().contactContext;
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Edit or Delete",
      key: "action",
      render: (text, record) => {
        const { phoneNumber, firstName, lastName } = record;
        return (
          <>
            <Space size="middle">
              <a onClick={showEditModal}>
                <EditOutlined className="icon icon-dark" />
              </a>
            </Space>
            <Space size="middle">
              <a
                onClick={() => handleOnDelete(phoneNumber, firstName, lastName)}
              >
                <DeleteOutlined className="icon icon-red" />
              </a>
            </Space>
          </>
        );
      },
    },
  ];
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-background">
          <Fragment>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 20,
              }}
            >
              <Button
                type="primary"
                icon={<PlusSquareFilled />}
                data-testid="add-contact-button"
                onClick={showAddModal}
              >
                Add
              </Button>
            </div>

            <Layout.Content>
              <Table
                dataSource={values.sort((a, b) =>
                  sortName(a.lastName, b.lastName)
                )}
                columns={columns}
              />
            </Layout.Content>

            <Modal
              title="Add contact"
              onCancel={showAddModal}
              visible={adding}
              footer={null}
            >
              <AddContact
                data-testid="add-contact-drawer"
                show={adding}
                handleOnFinish={handleAddFormOnFinish}
                handleOnFinishFailed={handleAddFormOnFinishFailed}
              />
            </Modal>
            <Modal
              title="Edit contact"
              visible={editing}
              onOk={showEditModal}
              onCancel={showEditModal}
            >
              <p>......</p>
            </Modal>
          </Fragment>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>©2020 Created by The Linh</Footer>
    </Layout>
  );
};

export default ContactList;
