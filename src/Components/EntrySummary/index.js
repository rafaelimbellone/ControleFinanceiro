import React from 'react';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '../Core/Container';

const EntrySummary = ({onPressActionButton}) => {
    const categorias = [
        {key:'1', description: 'Lazer:', amout: '$90'},
        {key:'2', description:  'Saúde: ', amout: 'R$300'},
        {key:'3', description: 'Transporte: ', amout: 'R$400'},
        {key:'4', description: 'Finanças: ', amout: 'R$800'},
      ];
    
    return(
        <Container title='Categorias' actionLabelText='Ultimos 7 dias.' 
                   actionButtonText='Ver Mais' onPressActionButton={onPressActionButton}>
            <EntrySummaryChart />
            <EntrySummaryList entradas={categorias} />           
        </Container>
    );
}

export default EntrySummary;