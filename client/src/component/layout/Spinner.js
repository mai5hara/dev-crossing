/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

const spinWrap = css({
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
  alignItems: 'center'
});

const Spinner = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#d2146c" }} spin />;

  return (
    <div css={spinWrap}>
      <Spin indicator={antIcon} />
    </div>
  );
};
export default Spinner;
