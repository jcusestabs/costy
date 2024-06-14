export const calculateFunctionPointsForRequirement = (requirement, indexComplexity) => {
    return requirement.complejidades[indexComplexity];
}

export const calculateFunctionPoints = (requirements) => {
    return requirements.reduce((acc, requirement) => acc + requirement.functionsPoint, 0);
}

export const calculateAdjustmentPoints = (adjustment) => {
    return adjustment
        .map(value => Number(value))
        .filter(value => !isNaN(value))
        .reduce((acc, adj) => acc + adj, 0);
}

export const calculateUFP = (functionPoints, adjustmentPoints) => {
    return functionPoints * ( 0.65 + (adjustmentPoints * 0.01) );
}