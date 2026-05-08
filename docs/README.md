# Docs — Alicante Bike Camp

Histórico de problemas detectados en la landing y de los arreglos aplicados.

## Estructura

- [audit-2026-05-08.md](audit-2026-05-08.md) — Auditoría inicial: contradicciones, typos, inconsistencias y oportunidades de conversión detectadas en la landing https://escuelakesape.com/alicante-bike-camp/.
- [propuestas-pendientes.md](propuestas-pendientes.md) — Cambios redactados pero aún no aplicados en WordPress. Cuando se apliquen pasan al CHANGELOG.
- [CHANGELOG.md](CHANGELOG.md) — Registro cronológico de cambios aplicados (texto antiguo → texto nuevo, fecha, motivo).

## Cómo añadir hallazgos nuevos

1. Añadir el issue al archivo de audit correspondiente (o crear uno nuevo `audit-YYYY-MM-DD.md` si es una revisión completa posterior).
2. Cuando se aplique un arreglo, mover la entrada al CHANGELOG con la fecha y el diff de copy.

## Convenciones

- Fechas en formato `YYYY-MM-DD`.
- Citas literales del texto original entre comillas dobles para que sea grep-eable.
- Cada issue tiene un ID estable (`C-01`, `T-01`, etc.) para poder referenciarlo desde el CHANGELOG.
