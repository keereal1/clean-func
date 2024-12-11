import healthIndicator from '../index';

test.each([
    [{name: 'Маг', health: 90}, 'healthy'],
    [{name: 'Мечник', health: 20}, 'wounded'],
    [{name: 'Лучник', health: 10}, 'critical'],
]) ('testing character with %s name and %i health', (character, expected) => {
    const result = healthIndicator(character);
    expect(result).toBe(expected)
})