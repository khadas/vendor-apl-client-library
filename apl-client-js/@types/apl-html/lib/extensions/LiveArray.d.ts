/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A LiveArray is a public class that holds an array of Objects that changes
 * over time.  LiveArrays are created and modified by ViewHosts.
 *
 * Inside of the APL document the LiveArray may be used normally in the
 * data-binding context.  If used as the "data" target for a multi-child component,
 * a LayoutRebuilder will be assigned to add and remove components from the component
 * as the LiveArray changes.
 *
 * For example:
 *
 *     {
 *       "type": "Sequence",
 *       "data": "${MyLiveArray}",
 *       "item": {
 *         "type": "Text",
 *         "text": "${index+1}. ${data}"
 *       }
 *     }
 *
 * As per the above example, when this sequence is first inflated there
 * will be three text components:  "1. Object A", "2. Object B", "3. Object C".
 * After the push_back and remove commands, the text components will now
 * be "1. Object B", "2. Object C", "3. Object D".
 *
 * The same LiveArray may be used by multiple RootContext objects. This allows
 * an application to create a single LiveArray to track a source of changing data
 * and display it in multiple view hosts simultaneously.
 *
 * Please note that changing LiveArray values has a limited effect on the
 * component hierarchy. A component with children bound to a live array will
 * have new children inserted and removed, but changing the value stored in
 * an existing LiveArray index will not cause that child to be re-inflated.
 */
export declare class LiveArray {
    /**
     * Create a LiveArray with an initial Object vector
     * @param array The vector of objects. Values should be stringified.
     * @return The LiveArray
     */
    static create(array?: any[]): LiveArray;
    liveArray: APL.LiveArray;
    private constructor();
    /**
     * Check to see if there are no elements in the map
     * @return True if the array is empty
     */
    empty(): boolean;
    /**
     * Clear all elements from the array
     */
    clear(): void;
    /**
     * @return The number of elements in the array.
     */
    size(): number;
    /**
     * Retrieve an object in the array.  If position is out of bounds, a NULL object
     * will be returned.
     * @param position The index of the object to return.
     * @return The object or a null object.
     */
    at(position: number): any;
    /**
     * Insert a new object into the array.  The position must fall within the range [0,size]
     * @param position The position at which to insert the object.
     * @param value The object to insert.
     * @return True if position was valid and the object was inserted.
     */
    insert(position: number, value: any): boolean;
    /**
     * Insert a range of objects into the array. The position must fall within the range [0,size]
     * @param position The position at which to insert the objects.
     * @param array array to insert.
     * @return True if the position was valid and at least one object was inserted.
     */
    insertRange(position: number, array: any[]): boolean;
    /**
     * Remove an object from the array.  The position must fall within the range [0,size)
     * @param position The position at which the object will be removed.
     * @param count Number of items to remove.
     * @return True if the position was valid and the object was removed.
     */
    remove(position: number, count?: number): boolean;
    /**
     * Change the value of an object at a position
     * @param position The position where the object will be changed
     * @param value The value it will be changed to.
     * @return True if the position was valid and the object was changed
     */
    update(position: number, value: any): boolean;
    /**
     * Update a range of objects in the array.  The starting position must fall within the range
     * [0,size - count], where count is the number of objects being modified.
     * @tparam InputIt The source iterator type
     * @param position The starting position where objects should be updated
     * @param array array to use in update.
     * @return True if the position was valid and at least one object was updated.
     */
    updateRange(position: number, array: any[]): boolean;
    /**
     * Push an object onto the back of the array.
     * @param value The object to push.
     */
    push_back(value: any): void;
    /**
     * Push a range of objects onto the array.
     * @param array array to push.
     * @return True if at least one object was pushed onto the array.
     */
    push_backRange(array: any[]): boolean;
}
