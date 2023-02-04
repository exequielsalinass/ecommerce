import {
  Container,
  Menu as MenuWeb,
  Grid,
  Icon,
  Label,
} from "semantic-ui-react";
import Link from "next/link";

function Menu() {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Menu;

function MenuPlatforms() {
  return (
    <MenuWeb>
      <Link href="/play-station">
        <MenuWeb.Item>PlayStation</MenuWeb.Item>
      </Link>
      <Link href="/play-station">
        <MenuWeb.Item>PC</MenuWeb.Item>
      </Link>
      <Link href="/play-station">
        <MenuWeb.Item>Xbox</MenuWeb.Item>
      </Link>
    </MenuWeb>
  );
}

function MenuOptions() {
  return (
    <MenuWeb>
      <MenuWeb.Item>
        <Icon name="user outline" />
        Mi Cuenta
      </MenuWeb.Item>
    </MenuWeb>
  );
}
