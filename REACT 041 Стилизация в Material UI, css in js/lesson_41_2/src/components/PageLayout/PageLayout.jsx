/** @jsxImportSource @emotion/react */
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { titleStyle } from './styles';

// import styles from "./PageLayout.module.css";

const PageLayout = ({ children, title }) => {
  return (
    <main>
      <Container>
        {title && <Typography css={titleStyle} variant='h1' gutterBottom>{title}</Typography>}
        {children}
      </Container>
      
      {/* <div className="container">
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </div> */}
    </main>
  );
};

export default PageLayout;