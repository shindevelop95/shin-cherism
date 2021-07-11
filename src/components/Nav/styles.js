import styled from 'styled-components'

export const Container = styled.div`

    width:100%;
    background-color:#91b9ae;
    padding:15px 0;
    
    span{
        display:none;
    }
    
    @media (max-width: 768px) {
        height:20px;
        padding:30px 0;
        span{
            display:block;
        }
        
        .active{   
            height:100%;
            display:block;
            color:white;
            position:absolute;
            font-size:30px;
            padding:200px 0;
            top:0;
            left:0;
            width:100%;
            text-align:center;
            background-color:#91b9ae;
            z-index:30;
        }
        .MuiSvgIcon-root{
            display:inline-block;
            position:absolute;
            right:10%;
            top:1%;
            font-size:45px;
            margin-left:flex;
            z-index:50;
            color:#eee;
            margin-top:10px;
            cursor:pointer;   
    }
  }
`;

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
    margin:auto;
  
 
`;

export const Group = styled.div`
    display: flex;
    align-items:center;
    width:10%;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        display:none;
  }
 
`;

export const TextGroup = styled.div`
    width:50%;
    color:#eee;
    
    .MuiSvgIcon-root{
        display:none;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin:auto;
        margin-top:180px;
        cursor:pointer;
       
        
     
  }
`;

export const TextGroupInner = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
   
   @media (max-width: 768px) {
        display:none;  
       
  }
`;
export const Button = styled.button`
    background-color: transparent;
    color:#eee;
    font-size:20px;
    border:none;
    margin-right:10px;

    .MuiSvgIcon-root{
        height:40px;
        width:40px;
    }


`;

export const Text = styled.h3`
    transition:.5s;

    &:hover{
        transform:scale(1.2);
    }`;

export const Input = styled.input``;


