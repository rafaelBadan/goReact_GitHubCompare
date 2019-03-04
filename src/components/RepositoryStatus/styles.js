import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  header {
    display: flex;
    flex-direction: column;

    padding: 30px;
    align-items: center;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }

    img {
      width: 64px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  div.buttons-container {
    padding: 5px 5px;
    display: flex;
    justify-content: space-around;
    button {
      padding: 5px 10px;
      border: 0;
      border-radius: 3px;
      font-size: 12px;
      font-weight: bold;
    }
    button.update {
      background: #63f5b8;

      &:hover {
        background: #52d89f;
      }
    }
    button.delete {
      background: #f00;

      &:hover {
        background: #c90000;
      }
    }
  }
`;
