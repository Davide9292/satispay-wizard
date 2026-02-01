# Design System Foundations - "Satispay Style"

Queste linee guida definiscono l'estetica dell'applicazione. L'obiettivo è replicare la "User Experience amichevole e sicura" tipica di Satispay.

## 1. Visual Vibe & Philosophy
- **Mood:** Friendly, Warm, Human-centric, Clean but not sterile.
- **Metaphor:** "Pagare è semplice come un messaggio". Semplicità estrema.
- **Shapes:** Arrotondamento pronunciato. Evita spigoli vivi. Tutto deve sembrare "toccabile" (stile Mobile App).

## 2. Color Palette (Strict Adherence)
Satispay usa una combinazione distintiva di un rosso vibrante su sfondi caldi.

### Primary Colors
- **Brand Red:** `#FF3D00` (Usato per CTA principali, loghi, accenti forti).
- **Brand Cream (Background):** `#FFFBEF` (COLORE CHIAVE. Non usare bianco puro `#FFFFFF` per lo sfondo pagina. Usa questo crema caldo).

### Secondary & Neutrals
- **Surface White:** `#FFFFFF` (Usato per le card o i moduli sopra lo sfondo crema).
- **Text Primary:** `#333333` (Grigio scuro quasi nero, più morbido del #000000).
- **Text Secondary:** `#787878` (Per sottotitoli e label).
- **Light Grey (Borders/Dividers):** `#E6E6E6`.
- **Success Green:** `#4CD964` (Per feedback positivi).
- **Error Red:** `#FF3B30` (Simile al brand red ma più semantico).

## 3. Typography
Usa un font Sans-Serif geometrico ma con "aperture" ampie che lo rendono amichevole.
- **Font Family consigliata:** `Rubik` (Google Font) o `Inter` (se settato con tracking leggermente negativo). Preferenza per **Rubik** per il vibe più "rotondo".
- **Weights:**
  - **Bold (700):** Per Titoli (es. "Ciao, come ti chiami?").
  - **Medium (500):** Per Bottoni e Label importanti.
  - **Regular (400):** Per testi descrittivi.

## 4. Spacing & Layout
- **Approccio:** Mobile-first. Molto "white space" (o meglio, "cream space").
- **Grid:** Layout a colonna singola centrale (max-width: 480px) per simulare l'esperienza app anche su desktop.

## 5. UI Components Specs

### Buttons (Primary)
- **Shape:** Pillola completa (`border-radius: 9999px`).
- **Color:** Sfondo `#FF3D00`, Testo `#FFFFFF`.
- **Behavior:** Al click deve dare feedback immediato (leggero scale-down o cambio opacità). Niente ombre pesanti, look "flat" ma vibrante.
- **Width:** Spesso full-width (`w-full`) nel contesto mobile/form.

### Input Fields
- **Background:** Trasparente o leggermente grigio (`#F9F9F9`) se dentro una card bianca.
- **Border:** Sottile (`1px`) colore `#E6E6E6`.
- **Focus:** Il bordo diventa `#FF3D00` (Brand Red).
- **Label:** Piccola, sopra l'input, colore `#787878`.

### Selection Cards (Step 2 - Ruoli)
- **Container:** Bianco `#FFFFFF` su sfondo crema.
- **Border:** `1px solid #E6E6E6`.
- **Radius:** `16px` (Molto arrotondato).
- **Selected State:** Bordo spesso `2px solid #FF3D00`, sfondo leggermente tinto di rosso (`#FFF5F5`).
- **Icon:** Icona centrale grigia che diventa rossa quando selezionata.

### Vibe Coding Slider (Step 3)
- **Track:** Grigio chiaro (`#E6E6E6`).
- **Fill/Progress:** Rosso Satispay (`#FF3D00`).
- **Thumb (Pallino):** Bianco con bordo rosso o Rosso pieno. Deve essere grande e facile da "grabbare".

### Thank You Page
- **Icon:** Grande spunta verde o rossa animata al centro.
- **Background:** Può invertire i colori (tutto Rosso `#FF3D00` con testo Bianco) per celebrare il successo, tipico pattern di Satispay per la schermata "Pagamento Inviato".