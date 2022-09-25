import React, { useState, useEffect, useContext, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid, Image, Input, Modal, Popup, Table } from "semantic-ui-react";
import { StoreContext } from "../../context/storeContext";
import { getInfoCep } from "../../services/cep";
import { cpfMask } from "../../utils/cpfFormat";
import {
  BackButton,
  BackgroundIcon,
  BuyInfo,
  Content,
  DeleteIcon,
  Form,
  Main,
  Title,
  Warning,
} from "./styles";

export default function Checkout() {
  const { cart, removeItemCart, clearCart } = useContext(StoreContext);
  const [stateCep, setStateCep] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
    cep: "",
    address: "",
    city: "",
    state: "",
  });
  const [cartValue, setCartValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();

  const getDataCep = async () => {
    try {
      const { data } = await getInfoCep(info.cep);
      if (data.erro) {
        setStateCep(true);
      } else {
        setStateCep(false);
        setInfo((info) => ({
          ...info,
          address: data.logradouro,
          city: data.localidade,
          state: data.uf,
        }));
      }
    } catch (error) {
      setStateCep(true);
    }
  };

  useEffect(() => {
    if (info.cep.length === 8) {
      getDataCep();
    }
  }, [info]);

  useEffect(() => {
    if (!stateCep) {
      setInfo((state) => ({
        ...state,
        address: "",
        ciyt: "",
        state: "",
      }));
    }
  }, [stateCep]);

  useEffect(() => {
    setCartValue(0);
    cart.forEach((cart) => {
      setCartValue((value) => value + cart.price);
    });
  }, [cart]);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    setOpenModal(true);
  };

  return (
    <Main>
      {cart.length > 0 ? (
        <Form onSubmit={submitForm}>
          <Grid columns={1} style={{ flex: 1 }}>
            <Title>Finalizar Compra</Title>
            <Grid.Row>
              <Grid.Column>
                <Input
                  required
                  placeholder="Nome completo"
                  style={{ width: "100%" }}
                  value={info.name}
                  onChange={(event) =>
                    setInfo((state) => ({ ...state, name: event.target.value }))
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Input
                  required
                  placeholder="CPF"
                  value={cpfMask(info.cpf)}
                  onChange={(event) => {
                    if (event.target.value.length <= 14) {
                      setInfo((info) => ({ ...info, cpf: event.target.value }));
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  required
                  placeholder="Celular"
                  value={info.phone}
                  onChange={(event) => {
                    if (event.target.value.length <= 11) {
                      setInfo((info) => ({
                        ...info,
                        phone: event.target.value,
                      }));
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Input
                  required
                  placeholder="Email"
                  type="email"
                  value={info.email}
                  style={{ width: "100%" }}
                  onChange={(event) =>
                    setInfo((info) => ({ ...info, email: event.target.value }))
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Input
                  required
                  placeholder="CEP"
                  error={stateCep}
                  value={info.cep}
                  onChange={(event) => {
                    if (event.target.value.length <= 8) {
                      setInfo((info) => ({ ...info, cep: event.target.value }));
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  required
                  placeholder="Endereço"
                  value={info.address}
                  disabled={info.cep.length <= 7}
                  onChange={(event) =>
                    setInfo((info) => ({
                      ...info,
                      address: event.target.value,
                    }))
                  }
                  style={{ width: "100%" }}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Input
                  required
                  placeholder="Cidade"
                  disabled={info.cep.length <= 7 && !stateCep}
                  value={info.city}
                  onChange={(event) =>
                    setInfo((info) => ({ ...info, city: event.target.value }))
                  }
                  style={{ width: "100%" }}
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  required
                  placeholder="Estado"
                  disabled={info.cep.length <= 7 && !stateCep}
                  value={info.state}
                  onChange={(event) =>
                    setInfo((info) => ({ ...info, state: event.target.value }))
                  }
                  style={{ width: "100%" }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="box-movies">
            <Table unstackable inverted>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Imagem</Table.HeaderCell>
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>Qtd</Table.HeaderCell>
                  <Table.HeaderCell>Preço</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {cart.map((movie, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        size="mini"
                        rounded
                        style={{
                          margin: "0 auto",
                        }}
                      />
                    </Table.Cell>
                    <Table.Cell verticalAlign="middle">
                      {movie.title}
                    </Table.Cell>
                    <Table.Cell verticalAlign="middle">{1}</Table.Cell>
                    <Table.Cell verticalAlign="middle">
                      R$ {movie.price.toFixed(2)}
                    </Table.Cell>
                    <Table.Cell verticalAlign="middle">
                      <Popup
                        content="Remover do Carrinho"
                        inverted
                        position="bottom right"
                        style={{
                          fontSize: 14,
                        }}
                        trigger={
                          <BackgroundIcon
                            type="button"
                            onClick={() => removeItemCart(index)}
                          >
                            <DeleteIcon />
                          </BackgroundIcon>
                        }
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <BuyInfo>
              <div className="value-info">
                <span className="total">Total: </span>
                <span className="price">R$ {cartValue.toFixed(2)}</span>
              </div>
              <button type="submit" className="button-buy">
                Finalizar
              </button>
            </BuyInfo>
          </div>
        </Form>
      ) : (
        <Warning>
          <h3 className="title">Sem items no carrinho!</h3>
          <Link to="/" className="back">
            Volte para a página inicial
          </Link>
        </Warning>
      )}
      <Modal size="small" open={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Content>
          <Content>
            <span className="congrats">Obrigado</span>
            <span className="name">{info.name}</span>
            <span className="confirmed">Sua compra foi finalizada!</span>
            <BackButton
              onClick={() => {
                clearCart();
                history.push("/");
              }}
            >
              Ir para loja
            </BackButton>
          </Content>
        </Modal.Content>
      </Modal>
    </Main>
  );
}
