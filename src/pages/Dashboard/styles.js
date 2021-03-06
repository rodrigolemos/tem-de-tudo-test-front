import styled from 'styled-components';

export const Filter = styled.div`
  width: 100%;
  padding: 2rem 0 .5rem 0;
  border-top: 2px solid #EEE;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 726px) {
    flex-direction: column;
  }

  label {
    margin-right: 2rem;
  }

  input[type="date"] {
    width: auto;
    font-size: 1.6rem;
    margin: .7rem;
    padding: .75rem 1rem;
    color: #555;
    border-radius: 5px;
    background-color: var(--font-secondary);
    border: 1px solid var(--font-secondary);
    outline-color: var(--bg-primary);
    transition: all .2s ease-in-out;

    &:focus {
      border: 1px solid var(--bg-primary);
    }

    ::placeholder {
      color: var(--font-secondary-dark);
    }
  }
`;

export const ReportsArea = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .row {
    width: 100%;
    height: 50%;
    margin-bottom: 5px;

    display: flex;
    align-items: center;

    @media only screen and (max-width: 1070px) {
      flex-direction: column;
    }
  }

  .col {
    width: 50%;
    height: 100%;
    margin: 5px;
    overflow: auto;
    flex-direction: column;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (max-width: 1070px) {
      width: 100%;
    }
  }

  .col-full {
    width: 100%;
  }
`;

export const SearchHelp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: .4;

  svg {
    width: 40%;
    height: 40%;
  }
`;
