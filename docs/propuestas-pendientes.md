# Propuestas pendientes de aplicar

Cambios redactados pero aún **no aplicados** en https://escuelakesape.com/alicante-bike-camp/.

Cuando se apliquen en WordPress, mover la entrada al [CHANGELOG](CHANGELOG.md) con la fecha de aplicación.

---

## Tanda 1 — 2026-05-08

### Typos directos (5 minutos en WordPress)

#### T-01 · Día 2 — «Técincas» → «Técnicas»
- **Sección:** «¿Qué vas a aprender?», ítem Día 2.
- **Antes:** `Día 2 – Técincas de Bike Park y trazadas`
- **Después:** `Día 2 – Técnicas de Bike Park y trazadas`

#### T-02 · Día 2 — «obstaculos» → «obstáculos»
- **Sección:** «¿Qué vas a aprender?», ítem Día 2.
- **Antes:** `Curvas peraltadas. Análisis de trazadas. Paso de obstaculos. Drops medianos. Iniciación a saltos. Bajadas con rocas.`
- **Después:** `Curvas peraltadas. Análisis de trazadas. Paso de obstáculos. Drops medianos. Iniciación a saltos. Bajadas con rocas.`

#### T-03 · «xc» → «XC»
- **Sección:** «¿Qué bici necesitas?».
- **Antes:** `Bici de xc doble, enduro (muscular o eléctrica). Si no tienes bici, te ayudo a alquilar una allí a buen precio. Escríbeme y lo gestionamos juntos.`
- **Después:** `Bici de XC doble, enduro (muscular o eléctrica). Si no tienes bici, te ayudo a alquilar una allí a buen precio. Escríbeme y lo gestionamos juntos.`

#### T-04 · FAQ bikepark — concordancia
- **Sección:** FAQ «¿Y si nunca he ido a un bikepark?».
- **Antes:** `Perfecto está es la mejor ocasión, yo lo conozco a fondo y te guiaré en todo momento. Descubrirás uno de los mejores bikeparks de Europa.`
- **Después:** `Perfecto, esta es la mejor ocasión: yo lo conozco a fondo y te guiaré en todo momento. Descubrirás uno de los mejores bikeparks de Europa.`

---

### C-03 · Bloque de precios unificado

**Problema actual:** tres bloques de precios competitivos sin coherencia. La cifra «595€» significa cosas distintas según la sección, y el descuento de la versión económica («329€ si vienes con un amigo o reservas entre los 5 primeros») mezcla dos condiciones distintas en una sola línea.

**Propuesta:** sustituir las dos columnas actuales («Versión económica» / «Opción Todo Incluido») y la mención suelta del FAQ por **un único bloque comparador con descuentos al final**.

#### Texto antiguo (los tres trozos a sustituir)

1. Bloque «Versión económica»:
   ```
   Versión económica
   - Entrada Bikepark sábado y domingo
   - Formación técnica completa
   - Pack regalo exclusivo (Valorado en 60€)
   Por solo 375€
   Solo 329€ si vienes con un amigo o reserva entre los 5 primeros.
   ```

2. Bloque «Opción Todo Incluido»:
   ```
   Opción Todo Incluido
   - Alojamiento en hotel cercano
   - Pensión completa desde viernes por la tarde hasta el domingo por la tarde.
   - Entrada Bikepark sábado y domingo
   - Formación técnica completa
   - Pack regalo exclusivo
   Por solo 690€.
   Solo 595€ si vienes con un amigo. Solo antes del 10 de Mayo.
   ```

3. Final del FAQ «¿Puedo ir solo/a?»:
   ```
   …Si quieres venir acompañado hay una oferta especial para ti.
   595€ por persona, si venís 2 o más!
   ```

#### Texto nuevo (un solo bloque)

```
Elige tu plan

────────────────────────────────────────────────
            SOLO CAMP            TODO INCLUIDO
────────────────────────────────────────────────
Formación técnica       ✓               ✓
los 3 días
Entrada Bikepark        ✓               ✓
sábado y domingo
Pack regalo             ✓               ✓
exclusivo (60€)
Hotel cercano           —               ✓
Pensión completa        —               ✓
viernes tarde →
domingo tarde
────────────────────────────────────────────────
                       375€            690€
────────────────────────────────────────────────

Descuentos (acumulables)
- Vienes con un amigo: –46€ por persona en Solo Camp · –95€ por persona en Todo Incluido
- Reserva antes del 10 de mayo: –[X]€

Ejemplo: Todo Incluido + amigo + early bird = 595€ por persona.

[ Reserva tu plaza ]   ¿Dudas? Escríbeme por WhatsApp →
```

**Y en el FAQ «¿Puedo ir solo/a?»:** retirar la mención del precio. Dejar solo la respuesta sobre el ambiente de grupo y un enlace al bloque de precios.

```
¿Puedo ir solo/a?
¡Claro! La mayoría de riders vienen solos. El ambiente de grupo es top y
acabarás haciendo amigos para futuras rutas. Si vienes acompañado tenéis
descuento de pareja (ver precios).
```

#### Decisiones que necesito que confirmes antes de aplicar

1. **Importe del descuento «early bird»** (antes del 10 de mayo). En el bloque actual no se ve cifra explícita en la versión económica; ¿es el mismo «–46€» que el de pareja, o es otra cantidad?
2. **¿Los descuentos son acumulables?** El copy actual sugiere que sí en Todo Incluido (595€ = 690€ – pareja – early bird ≈ 95€), pero conviene confirmarlo.
3. **¿Mantenemos la promo «entre los 5 primeros»?** Si sí, hay que decidir si sustituye al early bird o se suma.
4. **WhatsApp como CTA secundario:** ¿quieres que lo incluya o el flujo es siempre por el formulario?

Hasta tener estas respuestas, dejo el bloque como propuesta y no se aplica.

---

### C-02 · Una sola estructura del camp (sustituye 3 secciones)

**Problema actual:** «El Plan de "Rescate"», «¿Qué vas a aprender?» y «El Itinerario» describen los 3 días con criterios distintos (narrativo / contenidos técnicos / horario), y por encima «El Método de Trabajo» introduce «Bloque 1» y «Bloque 2». El visitante tiene que cruzar 4 secciones para entender qué pasa cada día.

**Propuesta:** fusionar las tres secciones en una sola tabla por día. Los bloques metodológicos (1 y 2) se mantienen como concepto pero pasan a ser tags dentro de cada día, no una sección aparte.

#### Texto antiguo a retirar

Eliminar tres secciones completas:
1. «El Plan de "Rescate":» con sus 3 ítems (Día 1 El Reset / Día 2 El Templo / Día 3 La Graduación).
2. «¿Qué vas a aprender?» con sus 3 ítems (Día 1 Básicos del MTB / Día 2 Técnicas de Bike Park / Día 3 Aplicamos aprendizajes).
3. «El Itinerario (Adaptado a la montaña, no al reloj)» con sus 3 ítems (Viernes / Sábado / Domingo).

La sección **«El Método de Trabajo: Cómo vamos a resetear tu técnica»** (con la explicación de Bloque 1 y Bloque 2) se mantiene **arriba** del nuevo bloque, como marco conceptual. Pero se retira la línea «Cuándo ocurre» de cada bloque (esa info pasa a la nueva tabla).

#### Texto nuevo (un solo bloque)

```
Tu camp, día a día

Tres días, tres lugares, una progresión clara:
del «pasajero» al «piloto».

────────────────────────────────────────────────
Día 1 · Viernes  ·  El Reset
Sabinar Bike Park  ·  17:00 a 20:00 aprox.
────────────────────────────────────────────────
Borramos los vicios. Si frenas con dos dedos, mal.
Si vas con el peso repartido entre brazos y piernas, mal.
Aquí te enseño a ser una roca sobre los pedales.

Qué practicas:
- Posición perfecta sobre la bici
- Optimización de frenada
- Caballito · Manual · Pumping
- Cabra hop · Bunny hop
- Curvas planas
- Iniciación a drops

Tag metodológico: Bloque 1 · Instrucción y corrección técnica.

────────────────────────────────────────────────
Día 2 · Sábado  ·  El Templo
La Fenasosa Bike Park  ·  10:00–14:00 + 16:00–19:00
────────────────────────────────────────────────
El bike park de referencia en España. Aquí ocurre el «clic».
Si no fluyes en 20 cm, no saltamos medio metro:
progresión real, sin presiones absurdas.

Qué practicas:
- Curvas peraltadas
- Análisis de trazadas
- Paso de obstáculos
- Drops medianos
- Iniciación a saltos
- Bajadas con rocas

Tags metodológicos:
- Mañana → Bloque 1 · Instrucción y corrección técnica.
- Tarde (opcional) → Bloque 2 · Aplicación narrada y flow guiado.

────────────────────────────────────────────────
Día 3 · Domingo  ·  La Graduación
Ruta salvaje  ·  09:00 a 13:30 aprox.
────────────────────────────────────────────────
Aplicamos todo en terreno virgen. Senderos naturales
donde demuestras que ya no eres el que llegó el viernes.

Qué practicas:
- Bajadas adaptadas al nivel de cada grupo
- Curvas cerradas y zetas
- Derrapes
- Pumping en terreno natural
- Y mucho más, según fluya el grupo

Tag metodológico: Bloque 2 · Aplicación narrada y flow guiado.

────────────────────────────────────────────────

Nota importante: los horarios son orientativos.
Mandan el sol, la temperatura y tu fatiga. Adaptamos
las horas para exprimir el día sin que el calor te agote.
Si buscas un horario rígido para planificar la siesta,
este no es tu sitio.

[ Reserva tu plaza ]
```

#### Notas de aplicación

- **«Sin presiones absurdas, con técnica real»** del original se mantiene casi literal en Día 2 porque resume bien el tono de marca.
- **«No es un curso. Olvídate de los conos en un parking»** (que está justo encima en el original, en «¿Qué es el Alicante Bike Camp?») se conserva intacto: no entra en este bloque.
- **«Aprenderás el Método Kesape. La misma técnica que me llevó a ser 3º del mundo en BMX…»** también se conserva en su sitio actual y no se duplica aquí.
- La «Nota importante» del itinerario actual se traslada al pie de la nueva tabla.

#### Decisiones que necesito que confirmes antes de aplicar

1. **Día 2 sesión de tarde:** en el original aparece como **«opcional»**. ¿Quieres mantenerla como opcional o pasarla a obligatoria? El copy lo refleja según tu respuesta.
2. **Hora de fin del Día 1:** el original solo dice «17:00 + 3 horas intensas» → asumido 20:00. Confirmar.
3. **Día 3 horario:** el original dice «cerramos sobre las 13:30». Lo dejo así.
4. **Pedirías eliminar «Bloque 1» y «Bloque 2» del marco mental?** Mi recomendación: mantenerlos en la sección «El Método de Trabajo» porque dan profesionalidad, pero como tags secundarios en la tabla, no como protagonistas. Si prefieres simplificar y borrarlos, dímelo y los quito.

---

### C-01 · Grupos: ¿2 o 3? (decisión pendiente)

No avanzo con texto nuevo hasta que me digas qué es lo real:

- **Opción A — Son 3 grupos de verdad** (Nivel 1, 2, 3): hay que corregir el FAQ «Trabajaremos en 2 grupos…».
- **Opción B — Son 2 grupos en práctica** y los 3 «Niveles» son perfiles de autoidentificación: hay que matizarlo en la sección de niveles («Describimos 3 perfiles para que te ubiques. En el camp os agrupamos en 2 según el grupo que se forme»).
- **Opción C — Depende de la edición / del número de inscritos**: hay que decirlo así.

Cuando elijas (A/B/C u otra), redacto el copy y lo añado a esta tanda.
