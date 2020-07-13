export const colorLegend = (selection, props) => {
  const {
    colorScale,
    circleRadius,
    spacing,
    textOffset,
    backgroundRectWidth,
    onClick,
    selectedColorValue
  } = props

  const backgroundRect = selection.selectAll('rect')
    .data([null])
  backgroundRect.enter().append('rect')
    .merge(backgroundRect)
    .attr('x', -circleRadius * 2)
    .attr('y', -circleRadius * 2)
    .attr('width', backgroundRectWidth)
    .attr('height', circleRadius + colorScale.domain().length * spacing)
    .attr('fill', 'none')
    .attr('opacity', 0.7)

  const groups = selection.selectAll('g')
    .data(colorScale.domain())

  const groupsEnter = groups.enter().append('g')
  groupsEnter
    .merge(groups)
    .attr('transform', (d, i) => `translate(0,${i * spacing})`)
    .attr('opacity', d =>
      (!selectedColorValue || d === selectedColorValue)
        ? 1
        : 0.2
    )
    .on('click', d => onClick(
      d === selectedColorValue
        ? null
        : d
    ))

  groups.exit().remove()

  groupsEnter
    .append('circle')
    .merge(groups.select('circle'))
    .attr('fill', colorScale)
    .attr('r', circleRadius)

  groupsEnter
    .append('text')
    .merge(groups.select('text'))
    .text(d => d)
    .attr('x', textOffset)
    .attr('y', circleRadius / 2)
}
