import styled from "styled-components";

export const LoadContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f4;
      flex-direction: column;
`   

export const Load = styled.div`
    
    border: 8px solid #3498db;
    border-top: 8px solid #ffffff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`
