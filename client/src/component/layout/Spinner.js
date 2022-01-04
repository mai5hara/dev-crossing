/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

const spinWrap = css({
  display: 'flex',
  justifyContent: 'center',
});

const Spinner = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

  return (
    <div css={spinWrap}>
      <Spin indicator={antIcon} />
    </div>
  );
};
export default Spinner;
