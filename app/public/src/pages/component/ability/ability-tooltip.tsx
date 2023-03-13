import React from "react"
import { Ability } from "../../../../../types/enum/Ability"
import { AbilityDescription } from "../../../../../types/strings/Ability"
import { addIconsToDescription } from "../../utils/descriptions";
import "./ability-tooltip.css"

export function AbilityTooltip(props: { 
  ability: Ability
  stars?: number
  ap?: number
}) {
  const description = AbilityDescription[props.ability].eng
  return <p className="ability-description">{addIconsToDescription(description, props.stars, props.ap)}</p>
}
