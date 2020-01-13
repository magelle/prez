# Software Design

## Principles

- Complexity is not linear but exponential
```
Complexity
A
|   |
|   |
| _/
|---> Size
```

> We do not use the same tools to build a dog house than a skyscraper

### Different types of complexity
- Essential -> comlexity of the problem
- Mandatory -> complexity to use the service
- accidental -> uneeded complexity (can tecnical or functionnal)

### Source of complexity
- States
- Interdependencies
- Uncertainty
- Irreversibility

> Taming Complexity with Reversibility - Kent Beck

### How to limit the size (and therefore complexity)

- Build several modules
- Decouple

> Lehman's laws

### Overenginering

### Modelise business rather than put business in technical stuff

- Architecture should leads software architecture
- Look for business architecture
- Business is discovered not built

### Software should be easy to change

- Decouple
- Without decoupled software complexity is multiply -> C1 * C2 * C3
- With decoupled modules -> complexity is just added -> C1 + C2 + C3

### Make it work, make it right, (make it fast)

### Business and technical stuff does not evolve the same way

- Business evolve slowly but often
- Technical evolve rarely but in big change
- Both should be decoupled
- Architecture hexagonale
- ACL

### Know the business or businesses

- Several business area can use the same objects
- Bounded contexts
- > databases are like toothbrush, we don't share it

## Tests

- Functionnal arround business (BDD ?)
- Integration with technical stuff
- Contract testing

