import styled from "styled-components";
import { colors } from "../../styles/colors";

export const LoadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    flex-direction: column;
`   

export const Load = styled.div`
    
    border: 6px solid ${colors.dark_orange_web};
    border-top: 6px solid transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`
