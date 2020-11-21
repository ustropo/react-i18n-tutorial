import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Dropdown, Grid, Header, Input, Message } from "semantic-ui-react";

function App() {
  const options = [
    { key: 'en', text: 'English', value: 'en' },
    { key: 'pt', text: 'Português', value: 'pt' },
  ]
  const [name, setName] = useState('');
  const { t, i18n } = useTranslation();

  return (
    <Container text>
      <Header as="h2" style={{ marginTop: '20px' }}>
        {t("title")}
      </Header>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Dropdown
              search
              value={i18n.language}
              selection
              options={options}
              onChange={(_, data) => {
                i18n.changeLanguage(data.value)
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <Input type="text" onChange={(_, data) => setName(data.value)}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Message>
              <Message.Header>{t("header")}</Message.Header>
              <p>
                {t("message", {name, date: new Date()})}
              </p>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
