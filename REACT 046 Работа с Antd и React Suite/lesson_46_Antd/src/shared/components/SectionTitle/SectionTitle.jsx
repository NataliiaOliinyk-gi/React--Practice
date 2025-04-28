/** @jsxImportSource @emotion/react */
import { Typography, Divider } from 'antd';

const {Title} = Typography;

import { sectionTitleWrapperStyle } from "./styles";

const SectionTitle = ({ title }) => {
    return (
        <div css={sectionTitleWrapperStyle}>
             <Title level={2}>{title}</Title>
             <Divider style={{backgroundColor: "#EAEAEA"}} />
        </div>
    )
};

export default SectionTitle;