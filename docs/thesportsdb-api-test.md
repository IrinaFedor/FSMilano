# TheSportsDB API — Test Summary

Tested **2025-01-30** to look up **World Figure Skating Championships 2025** and general figure skating results.

## Base URL & auth

- **V1 base:** `https://www.thesportsdb.com/api/v1/json/123/`
- **Free API key:** `123` (in URL path)

---

## What worked

| Endpoint | Example | Result |
|----------|---------|--------|
| **lookupleague** | `lookupleague.php?id=5145` | Olympics Figure Skating league (5145): name, description, badges, current season 2026. |
| **search_all_leagues** | `search_all_leagues.php?s=Skating` | Returns Skating leagues: 5145 (Olympics Figure Skating), 5146 (Short Track), 5147 (Speed Skating), **5753 (ISU Grand Prix)**. |
| **eventspastleague** | `eventspastleague.php?id=5145` | One past event: Beijing 2022 Pair Skating Free (idEvent 1460842). |
| **eventspastleague** | `eventspastleague.php?id=5753` | One past event: Grand Prix Final Exhibition Gala 2025-12-07, Nagoya (idEvent 2386029). |
| **lookupevent** | `lookupevent.php?id=1460842` | Full event details (venue, date, etc.). **strResult** is `null` — no embedded results. |
| **searchevents** | `searchevents.php?e=World_Championship` | Returns **Snooker** “World Championship” events, not figure skating. |

**Search by athlete (V1):**

- **searchplayers** — `searchplayers.php?p=Player_Name` — Search by main or alternate name. Use underscores for spaces (e.g. `Kaori_Sakamoto`). Free: 2 req/min, Premium: 10. Returns `player` array with idPlayer, strPlayer, strTeam, strSport, strNationality, dateBorn, strPosition, thumb/cutout URLs, etc. Example: `p=Kaori_Sakamoto` returns Kaori Sakamoto (Japan Figure Skating Women, Skating, Figure Skater).
- **lookupplayer** — `lookupplayer.php?id=idPlayer` — Full player details by ID (get idPlayer from searchplayers). Related: lookuphonours, lookupformerteams, lookupmilestones, lookupcontracts, playerresults (all by idPlayer).

---

## What failed or was missing

- **World Figure Skating Championships 2025**  
  No league or event found. TheSportsDB figure skating coverage seen in tests is:
  - **5145** — Olympics Figure Skating (Olympic Games only)
  - **5753** — ISU Grand Prix  
  There is no separate “World Championships” league, and no 2025 World Champs event in the responses.

- **eventresults**  
  `eventresults.php?id=1460842` and `eventresults.php?id=2386029` returned errors (possible free-tier limit or rate limit).

- **eventsseason** / **eventsnextleague**  
  `eventsseason.php?id=5145&s=2024-2025` and `eventsnextleague.php?id=5145` returned errors.

- **searchevents** for “Figure Skating” / “2025”  
  Searches tried returned errors or no figure skating events.

---

## Conclusion

- TheSportsDB **does** expose figure skating **leagues** (Olympics 5145, ISU Grand Prix 5753) and **events** for those leagues (e.g. Beijing 2022 Pairs, GP Final Gala 2025).
- **World Figure Skating Championships 2025** does **not** appear in the API: no dedicated World Champs league and no 2025 World Champs event found.
- **Results** for an event (`eventresults`) could not be retrieved in this test (errors may be due to free-tier or rate limits).

For **World Championship 2025 results**, official data is on **results.isu.org** (HTML only, no public API).
