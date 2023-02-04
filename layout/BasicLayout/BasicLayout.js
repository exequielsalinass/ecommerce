import Header from "../../components/Header";

import { Container } from "semantic-ui-react";

function BasicLayout(props) {
  const { children } = props;

  return (
    <Container fluid className="basic-layout">
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
}

export default BasicLayout;
