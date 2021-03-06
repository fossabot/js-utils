<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@apextoaster/js-utils](./js-utils.md)

## js-utils package

## Classes

|  Class | Description |
|  --- | --- |
|  [ArrayMapper](./js-utils.arraymapper.md) | Map an array of items into a map of arrays using the specified keys, able to <code>skip</code> initial items and gather remaining items into a <code>rest</code> key. |
|  [AsyncTracker](./js-utils.asynctracker.md) | Async resource tracker using node's internal hooks.<!-- -->This probably won't work in a browser. It does not hold references to the resource, to avoid leaks. Adapted from https://gist.github.com/boneskull/7fe75b63d613fa940db7ec990a5f5843\#file-async-dump-js |
|  [Checklist](./js-utils.checklist.md) | Check whether items are included or not (blacklist or whitelist, depending on <code>mode</code>). |
|  [ChildProcessError](./js-utils.childprocesserror.md) | Error indicating that a child process exited with an error status. |
|  [InvalidArgumentError](./js-utils.invalidargumenterror.md) | Error indicating that an invalid argument was passed to a function call. |
|  [MissingKeyError](./js-utils.missingkeyerror.md) | Error indicating that a required key did not exist in a map-like. |
|  [NotFoundError](./js-utils.notfounderror.md) | Error indicating that some value was not found. |
|  [NotImplementedError](./js-utils.notimplementederror.md) | Error indicating that a function has not been implemented yet. |
|  [TimeoutError](./js-utils.timeouterror.md) | Error indicating that a promise timed out. |

## Enumerations

|  Enumeration | Description |
|  --- | --- |
|  [ChecklistMode](./js-utils.checklistmode.md) |  |

## Functions

|  Function | Description |
|  --- | --- |
|  [concat(chunks)](./js-utils.concat.md) | Concatenate a list of buffers. |
|  [constructorName(val)](./js-utils.constructorname.md) | Get the constructor name from an instance. |
|  [countOf(val)](./js-utils.countof.md) | Calculate the "length" of an array or value.<!-- -->Arrays return their length, single values return 1, and nil values return 0. This counts the number of elements that setOrPush would add. |
|  [defaultWhen(condition, items)](./js-utils.defaultwhen.md) | Return the first element when <code>condition</code> is true and the second element when <code>condition</code> is false. |
|  [defer(ms, val)](./js-utils.defer.md) | Resolve after a set amount of time. |
|  [doesExist(val)](./js-utils.doesexist.md) | Check if a variable is not nil. |
|  [encode(chunks, encoding)](./js-utils.encode.md) | Concatenate then encode a list of buffers. |
|  [entriesOf(map)](./js-utils.entriesof.md) | Get entries of a map-like. |
|  [filterNil(list)](./js-utils.filternil.md) | Remove any null or undefined items from the list. |
|  [getConstructor(val)](./js-utils.getconstructor.md) | Get the constructor from an instance. |
|  [getHead(map, key)](./js-utils.gethead.md) | Get the first element from the specified key within a map of lists. |
|  [getHeadOrDefault(map, key, defaultValue)](./js-utils.getheadordefault.md) | Get the first element from the specified key, within a map of lists, or a default value when the key does not exist or is nil. |
|  [getMethods(value)](./js-utils.getmethods.md) | Get the methods from an instance and its prototypes. |
|  [getOrDefault(map, key, defaultValue)](./js-utils.getordefault.md) | Get a map key or default value when the key does not exist or is nil. |
|  [getTestLogger(verbose)](./js-utils.gettestlogger.md) | Get a test logger. Returns a null logger unless <code>verbose</code> is true or run under debug mode. |
|  [isDebug()](./js-utils.isdebug.md) | Test if DEBUG mode is set.<!-- -->TODO: check variable value as well |
|  [isNil(val)](./js-utils.isnil.md) | Check if a value is nil. |
|  [leftPad(val, min, fill)](./js-utils.leftpad.md) |  |
|  [makeDict(map)](./js-utils.makedict.md) | Turns a map or dict into a dict |
|  [makeMap(val)](./js-utils.makemap.md) | Clone a map or map-like object into a new map. |
|  [mergeList(parts)](./js-utils.mergelist.md) | Merge arguments, which may or may not be arrays, into one return that is definitely an array. |
|  [mergeMap(target, source)](./js-utils.mergemap.md) | Merge the <code>source</code> map into the <code>target</code> map, replacing keys that already exist. |
|  [mustCoalesce(values)](./js-utils.mustcoalesce.md) | Return the first value that is not nil.<!-- -->@<!-- -->todo: rename to mustDefault |
|  [mustExist(val)](./js-utils.mustexist.md) | Assert that a variable is not nil and return the value. |
|  [mustFind(list, predicate)](./js-utils.mustfind.md) | Find a value matching the given predicate or throw. |
|  [mustGet(map, key)](./js-utils.mustget.md) | Get an element from a Map and guard against nil values. |
|  [normalizeMap(map)](./js-utils.normalizemap.md) | <b><i>(BETA)</i></b> Normalize a map-like of values into a dict of lists of strings. |
|  [pairsToMap(pairs)](./js-utils.pairstomap.md) | Turns a list of name-value pairs into a map. |
|  [pushMergeMap(args)](./js-utils.pushmergemap.md) | Merge the provided maps into a new map, merging keys that already exist by pushing new items. |
|  [removePid(path)](./js-utils.removepid.md) | Remove the file at the given <code>path</code>. |
|  [setOrPush(map, key, val)](./js-utils.setorpush.md) | Set a map key to a new array or push to the existing value. |
|  [signal(signals)](./js-utils.signal.md) |  |
|  [spyLogger(spies)](./js-utils.spylogger.md) | Create a spy logger using the provided methods, which returns itself as a child. |
|  [timeout(ms, oper)](./js-utils.timeout.md) | Reject after a set amount of time if the original promise has not yet resolved. |
|  [trim(val, max, tail)](./js-utils.trim.md) |  |
|  [waitForChild(child)](./js-utils.waitforchild.md) | Wait for a child process to exit, collecting output, errors, and exit status. |
|  [writePid(path)](./js-utils.writepid.md) | Write the current process ID to a file at the given <code>path</code>. |
|  [writeValue(stream, value)](./js-utils.writevalue.md) |  |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [ArrayMapperOptions](./js-utils.arraymapperoptions.md) |  |
|  [ChecklistOptions](./js-utils.checklistoptions.md) |  |
|  [ChildOptions](./js-utils.childoptions.md) |  |
|  [ChildResult](./js-utils.childresult.md) |  |
|  [Dict](./js-utils.dict.md) |  |
|  [ExternalModule](./js-utils.externalmodule.md) |  |

## Variables

|  Variable | Description |
|  --- | --- |
|  [SIGNAL\_RELOAD](./js-utils.signal_reload.md) |  |
|  [SIGNAL\_RESET](./js-utils.signal_reset.md) |  |
|  [SIGNAL\_STOP](./js-utils.signal_stop.md) |  |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [ChildSpawner](./js-utils.childspawner.md) |  |
|  [MapLike](./js-utils.maplike.md) | A <code>Map</code> or dictionary object with string keys and <code>TVal</code> values. |
|  [ModuleCtor](./js-utils.modulector.md) |  |
|  [Nil](./js-utils.nil.md) | Unset value. |
|  [Optional](./js-utils.optional.md) | Value that may be nil. |

