/**
 * External dependencies
 */
import { act } from '@testing-library/react-native';

/**
 * WordPress dependencies
 */
import { requestMediaPicker } from '@wordpress/react-native-bridge';

/**
 *
 * Sets up Media Picker mock functions.
 *
 * @typedef {Object} MediaPickerMockFunctions
 * @property {Function} expectMediaPickerCall Checks if the request media picker function has been called with specific arguments.
 * @property {Function} mediaPickerCallback   Callback function to notify the media items picked from the media picker.
 *
 * @return {MediaPickerMockFunctions} Media picker mock functions.
 */
export const setupMediaPicker = () => {
	let mediaPickerCallback;
	requestMediaPicker.mockImplementation(
		( source, filter, multiple, callback ) => {
			mediaPickerCallback = callback;
		}
	);
	return {
		expectMediaPickerCall: ( source, filter, multiple ) =>
			expect( requestMediaPicker ).toHaveBeenCalledWith(
				source,
				filter,
				multiple,
				mediaPickerCallback
			),
		mediaPickerCallback: async ( ...mediaItems ) =>
			act( async () =>
				mediaPickerCallback(
					mediaItems.map(
						( { localId, localUrl, type = 'image' } ) => ( {
							type,
							url: localUrl,
							id: localId,
						} )
					)
				)
			),
	};
};
