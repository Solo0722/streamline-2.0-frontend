import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Image,
  Input,
  message,
  Select,
  Upload,
} from "antd";
import React, { useState, useEffect, useContext } from "react";
import { BsCloudUpload } from "react-icons/bs";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import { GlobalContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const { currentUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (!currentUser || currentUser === null) {
      navigate("/auth");
    }
  }, []);

  return (
    <CreateBlogWrapper>
      <div className="title-bar">
        <h3>Create blog</h3>
        <small>Upload a blog to your account</small>
      </div>
      <MainWrapper>
        <ImageUploadWrapper>
          <BsCloudUpload size={25} />
          <small>Click to select a main image for your blog</small>
        </ImageUploadWrapper>
        <ContentWrapper>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>

            <Form.Item label="Category" name="category">
              <Select
                // defaultValue="lucy"
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Body" name="body">
              <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ContentWrapper>
      </MainWrapper>
    </CreateBlogWrapper>
  );
};

const CreateBlogWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 5rem;

  & .title-bar {
    margin-bottom: 2rem;
  }

  & .title-bar h3 {
    font-weight: bolder;
  }

  & .title-bar small {
    opacity: 0.6;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 1rem;
    }
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${MEDIA_QUERIES.TABLET} {
    & {
      flex-direction: column;
    }
  }
`;
const ImageUploadWrapper = styled.div`
  border: 2px dashed gray;
  width: 35%;
  height: 350px;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.blogTagsBg}; */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  & small {
    margin-top: 0.5rem;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;
const ContentWrapper = styled.div`
  /* border: 1px solid blue; */
  width: 60%;
  /* height: 300px; */

  form label {
    font-weight: bold;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 100%;
    }
  }
`;
export default CreateBlog;
