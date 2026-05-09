import { Grid, GridItem, Show } from "@chakra-ui/react"


function App() {
  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}>
      <GridItem area="nav" bg="crimson">
        nav
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" bg="blue.100">
       aside
      </GridItem>
      </Show>
      <GridItem area="main" bg="blackAlpha.600">
       main
      </GridItem>
    </Grid>
  );
}

export default App