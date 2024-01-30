import {
    tbody,
    each,
    state,
    a,
    captionBottom,
    captionTop,
    form,
    inputText,
    reset,
    span,
    submit,
    set,
    trigger,
    when,
    to,
    functionModel,
    negate,
    timer,
    stateProxy,
    transform
} from "../../trio.js";
import {AbstractDataTable, row} from "./AbstractDataTable.js";

export class DataTable extends AbstractDataTable {
    constructor(dataModel) {
        super(dataModel)
        this.table.add(tbody().add(each(dataModel, (item, index) => row(this, index, item))))
    }
}

export function dataTable(result, offset = state(0)) {
    return new DataTable(result, offset)
}

function pageNav(which, action, boundaryModel) {
    return a().setClass('rap-paging ' + which + '-page')
        .title('Go to ' + which + ' page')
        .color(transform(boundaryModel, to('silver')))
        .onClick(when(transform(boundaryModel, negate), action))
}

export function pageControls(page, result, loading) {
    return form().onSubmit(event => page.set(parseInt(event.target.page.value) - 1)).add(
        pageNav('first', set(page, 0), result.first).add('\u226A'),
        pageNav('previous', set(page, transform(result.number, v => v - 1)), result.first).add('<'),
        //span().setClass('paging current-page').add('Page: ', inputText('page').width(2, 'em').value(transform(result, v => v.numberOfElements > 0 ? v.number + 1 : 0)), ' of ', result.totalPages, ' (rows ', result.pageable.offset.map(v => v + 1), ' - ', functionModel((a, b) => a + b, result.pageable.offset, result.numberOfElements), ' of ', result.totalElements, ')'),
        pageNav('next', set(page, transform(result.number, v => v + 1)), result.last).add('>'),
        pageNav('last', set(page, transform(result.totalPages, v => v - 1)), result.last).add('\u226B'),
        a().setClass('paging reload-page', transform(loading, to(' data-loading'))).add('\u21BB').title('Reload page').onClick(trigger(page)),
        //span().setClass('paging load-timer').add(transform(loading, to(' loading ', ' loaded in ')), timer(loading), ' ms.')
    )
}

export function pageTable(pageCall, page = pageCall.input.page) {
    pageCall = stateProxy(pageCall)
    return dataTable(pageCall.map(v => v.content), pageCall.pageable.offset)
        .captionTop(pageCall.error)
        .captionBottom(pageControls(page, pageCall, pageCall.loading))
}

export function searchControls(query) {
    return form().onSubmit(event => query.set(event.target.query.value)).onReset(set(query, '')).add(
        inputText('query').value(query),
        submit('Search'),
        reset('Clear')
    )
}

export function searchTable(searchCall, page = searchCall.input.page, query = searchCall.input.query, result = searchCall.output) {
    // This line is currently causing duplicate rest call with intermediate state.
    // query.onChange(() => page.set(0), false, false)
    let d = dataTable(result.content, result.pageable.offset)
    d.table.add(
        captionTop().setClass('rap-search').textLeft().nowrap().add(searchControls(query)),
        captionTop().setClass('rap-error').textLeft().nowrap().add(searchCall.error),
        captionBottom().setClass('rap-paging').textLeft().nowrap().add(pageControls(page, result, searchCall.stateModel.loading))
    )
    return d
}
