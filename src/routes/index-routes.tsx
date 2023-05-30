import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




<Router>
  
  <div>
    <div>
    <nav className="navbar bg-primary" data-bs-theme="dark" style={{ marginBottom: 10 }}>
      {/* Navbar code */}
    </nav>
    <Switch>
      <Route exact path="/cliente" component={ClientePage} />
      <Route exact path="/pet" component={PetPage} />
      <Route exact path="/consumo" component={ConsumoPage} />
    </Switch>
  </div>
</
    <