import { useTranslation } from "react-i18next";
import { Button, Container, Dropdown, Grid, Header, Message } from "semantic-ui-react";

function App() {
  const options = [
    { key: 'en', text: 'English', value: 'en' },
    { key: 'pt', text: 'Português', value: 'pt' },
  ]
  const { t } = useTranslation();

  return (
    <Container text>
      <Header as="h2" style={{ marginTop: '20px' }}>
        {t("title")}
      </Header>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Dropdown
              placeholder="Language"
              search
              selection
              options={options}
            />
          </Grid.Column>

          <Grid.Column>
            <Button>
              {t("button")}
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Message>
              <Message.Header>{t("header")}</Message.Header>
              <p>
                {t("message")}
              </p>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
