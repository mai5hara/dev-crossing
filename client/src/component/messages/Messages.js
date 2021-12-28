import React from 'react';
import { Row, Col } from 'antd';

const Messages = () => {
  return (
    <div>
      messages
      <Row>
        <Col span={8}>span 8</Col>
        <Col span={8}>span 8</Col>
        <Col span={8}>span 8</Col>
      </Row>
    </div>
  );
};

export default Messages;
